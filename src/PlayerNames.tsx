import { Menu, Item, useContextMenu } from 'react-contexify';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Row from 'react-bootstrap/Row';
import { Player } from './classes.ts';
import React from 'react';

export function PlayerNames({
  players,
  handleDelete,
  addJudge,
  removeJudge,
  setHeadJudge,
  setPage,
  setAccess,
  setSwitch,
}: {
  players: Player[];
  handleDelete: any;
  addJudge: any;
  removeJudge: any;
  setHeadJudge: any;
  setPage: any;
  setAccess: any;
  setSwitch: any;
}) {
  function handleRemoveJudge(e, judgeName) {
    e.preventDefault();
    removeJudge(judgeName);
  }

  function handleAddJudge(e) {
    addJudge(e.triggerEvent.target.textContent);
  }

  function handleSetHeadJudge(e) {
    e.preventDefault();
    setHeadJudge(e.target.textContent);
  }

  const { show } = useContextMenu({
    id: 'playerContext',
  });

  function handleContextMenu(event) {
    show({
      event,
      props: {
        key: 'value',
      },
    });
  }

  const playerNames = players.filter((player) => !player.judge);

  const cols = 3;
  const itemsPerCol = Math.floor(playerNames.length / cols) + 1; //3 columns pls
  const itemsSplits = playerNames
    .map((elmt, idx, arr) =>
      !(idx % itemsPerCol) ? arr.slice(idx, idx + itemsPerCol) : ''
    )
    .filter((item) => item !== '');

  const finalCols = [
    itemsSplits.map((split, i) => {
      return (
        <Col sm={(12 - cols) / cols} key={i}>
          <ListGroup key={i}>
            {split.map((player, j) => {
              return (
                <ListGroupItem
                  action
                  onClick={(event) => handleDelete(event, player.name)}
                  onContextMenu={handleContextMenu}
                  key={j}
                >
                  {player.name}
                </ListGroupItem>
              );
            })}
          </ListGroup>
        </Col>
      );
    }),
  ];

  return (
    <Container>
      <Row>
        <Col sm={cols}>
          <div
            style={{
              fontSize: '130%',
              textAlign: 'center',
              marginBottom: '0.6rem',
            }}
          >
            Judges
          </div>
          <ListGroup>
            {players
              .filter((player) => player.judge)
              .map((player, i) => {
                return (
                  <ListGroupItem
                    variant='success'
                    action
                    className='d-flex justify-content-between align-items-start align-items-center'
                    onClick={handleSetHeadJudge}
                    onContextMenu={(event) =>
                      handleRemoveJudge(event, player.name)
                    }
                    key={i}
                  >
                    <div>{player.name}</div>
                    {player.headJudge ? (
                      <Badge bg='success'>Head Judge</Badge>
                    ) : null}
                  </ListGroupItem>
                );
              })}
          </ListGroup>
        </Col>
        {finalCols}
      </Row>
      <Menu id={'playerContext'} theme='dark'>
        <Item
          id='access'
          onClick={(e) => {
            console.log(e);
            setAccess((e.triggerEvent.target as HTMLElement).textContent);
            setSwitch();
            setPage();
          }}
        >
          Set accessibility needs
        </Item>
        <Item id='judge' onClick={handleAddJudge}>
          Set as judge
        </Item>
      </Menu>
    </Container>
  );
}
