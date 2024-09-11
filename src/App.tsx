import { useState, useEffect, ChangeEvent } from 'react';
import { Menu, Item, useContextMenu } from 'react-contexify';
import 'react-contexify/ReactContexify.css';
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';
import { Player, Pod } from './classes.ts';
import './App.css';
import React from 'react';

function PodTable({
  pod,
  round,
  setScores,
}: {
  pod: Pod;
  round: number;
  setScores: any;
}) {
  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    num: number
  ) {
    setScores(parseFloat(e.target.value), num);
  }

  if (pod != null && pod[0] != null) {
    return (
      <>
        <Form>
          <Form.Group as={Row}>
            <Form.Label
              column
              htmlFor={pod[0].name}
              className='player-name'
              sm={4}
            >
              {pod[0].name}
            </Form.Label>
            <Col sm={2}>
              <Form.Control
                id={pod[0].name}
                plaintext
                value={round === 1 ? pod[0].round1Score : pod[0].round2Score}
                type='number'
                onChange={(e) => handleChange(e, 0)}
              ></Form.Control>
            </Col>
            <Form.Label
              column
              htmlFor={pod[1]!.name}
              className='player-name'
              sm={4}
            >
              {pod[1]!.name}
            </Form.Label>
            <Col sm={2}>
              <Form.Control
                id={pod[1]!.name}
                plaintext
                value={round === 1 ? pod[1]!.round1Score : pod[1]!.round2Score}
                type='number'
                onChange={(e) => handleChange(e, 1)}
              ></Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label htmlFor={pod[2]!.name} column sm={4}>
              {pod[2]!.name}
            </Form.Label>
            <Col sm={2}>
              <Form.Control
                id={pod[2]!.name}
                plaintext
                value={round === 1 ? pod[2]!.round1Score : pod[2]!.round2Score}
                type='number'
                onChange={(e) => handleChange(e, 2)}
              ></Form.Control>
            </Col>
            {pod[3] == null || (
              <Form.Label htmlFor={pod[3].name} column sm={4}>
                {pod[3].name}
              </Form.Label>
            )}
            {pod[3] == null || (
              <Col sm={2}>
                <Form.Control
                  id={pod[3].name}
                  plaintext
                  value={round === 1 ? pod[3].round1Score : pod[3].round2Score}
                  type='number'
                  onChange={(e) => handleChange(e, 3)}
                ></Form.Control>
              </Col>
            )}
          </Form.Group>
        </Form>
      </>
    );
  }

  return (
    <>
      <Row>
        <Col className='player-name'> </Col>
        <Col className='player-name'> </Col>
      </Row>
      <Row>
        <Col> </Col>
        <Col> </Col>
      </Row>
    </>
  );
}

function StoreMap({ pods, round, setPlayers, tableOrder }) {
  function setProxy(score: number, playerNum: number, podNum: number) {
    switch (round) {
      case 1:
        setPlayers([
          ...pods.toSpliced(
            podNum,
            1,
            pods[podNum].toSpliced(playerNum, 1, {
              ...pods[podNum][playerNum],
              round1Score: score,
            })
          ),
        ]);
        break;
      case 2:
        setPlayers([
          ...pods.toSpliced(
            podNum,
            1,
            pods[podNum].toSpliced(playerNum, 1, {
              ...pods[podNum][playerNum],
              round2Score: score,
            })
          ),
        ]);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Form.Control
        className='mb-4'
        type='text'
        size='lg'
        placeholder='Back of Store'
        tabIndex={-1}
        readOnly
        style={{ textAlign: 'center', cursor: 'default' }}
      />
      <Container>
        <Row>
          <Col className='column curve-left'>
            <PodTable
              pod={pods[tableOrder[0]]}
              round={round}
              setScores={(score, playerNum) =>
                setProxy(score, playerNum, tableOrder[0])
              }
            />
          </Col>
          <Col className='column curve-right'>
            <PodTable
              pod={pods[tableOrder[1]]}
              round={round}
              setScores={(score, playerNum) =>
                setProxy(score, playerNum, tableOrder[1])
              }
            />
          </Col>
          <Col lg={1}> </Col>
          <Col className='column curve-left'>
            <PodTable
              pod={pods[tableOrder[2]]}
              round={round}
              setScores={(score, playerNum) =>
                setProxy(score, playerNum, tableOrder[2])
              }
            />
          </Col>
          <Col className='column curve-right'>
            <PodTable
              pod={pods[tableOrder[3]]}
              round={round}
              setScores={(score, playerNum) =>
                setProxy(score, playerNum, tableOrder[3])
              }
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col className='column curve-left'>
            <PodTable
              pod={pods[tableOrder[4]]}
              round={round}
              setScores={(score, playerNum) =>
                setProxy(score, playerNum, tableOrder[4])
              }
            />
          </Col>
          <Col className='column curve-right'>
            <PodTable
              pod={pods[tableOrder[5]]}
              round={round}
              setScores={(score, playerNum) =>
                setProxy(score, playerNum, tableOrder[5])
              }
            />
          </Col>
          <Col lg={1}> </Col>
          <Col className='column curve-left'>
            <PodTable
              pod={pods[tableOrder[6]]}
              round={round}
              setScores={(score, playerNum) =>
                setProxy(score, playerNum, tableOrder[6])
              }
            />
          </Col>
          <Col className='column curve-right'>
            <PodTable
              pod={pods[tableOrder[7]]}
              round={round}
              setScores={(score, playerNum) =>
                setProxy(score, playerNum, tableOrder[7])
              }
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col className='column curve-left'>
            <PodTable
              pod={pods[tableOrder[8]]}
              round={round}
              setScores={(score, playerNum) =>
                setProxy(score, playerNum, tableOrder[8])
              }
            />
          </Col>
          <Col className='column curve-right'>
            <PodTable
              pod={pods[tableOrder[9]]}
              round={round}
              setScores={(score, playerNum) =>
                setProxy(score, playerNum, tableOrder[9])
              }
            />
          </Col>
          <Col lg={1}> </Col>
          <Col className='column curve-left'>
            <PodTable
              pod={pods[tableOrder[10]]}
              round={round}
              setScores={(score, playerNum) =>
                setProxy(score, playerNum, tableOrder[10])
              }
            />
          </Col>
          <Col className='column curve-right'>
            <PodTable
              pod={pods[tableOrder[11]]}
              round={round}
              setScores={(score, playerNum) =>
                setProxy(score, playerNum, tableOrder[11])
              }
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

function PlayerNames({
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

function PlayerScores({ scoresArray }) {
  const sortedScoresArray: {
    name: string;
    round1Score: number;
    round2Score: number;
    finalScore: number;
  }[] = scoresArray
    .map((player: Player) => {
      return {
        name: player.name,
        round1Score: player.round1Score,
        round2Score: player.round2Score,
        finalScore: player.round1Score + player.round2Score,
      };
    })
    .sort(
      (
        player1: {
          name: string;
          round1Score: number;
          round2Score: number;
          finalScore: number;
        },
        player2: {
          name: string;
          round1Score: number;
          round2Score: number;
          finalScore: number;
        }
      ) => {
        if (player1.finalScore === player2.finalScore) {
          return 0;
        } else {
          return player1.finalScore > player2.finalScore ? -1 : 1;
        }
      }
    );

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <td>#</td>
          <td>Name</td>
          <td>Round 1</td>
          <td>Round 2</td>
          <td>Total</td>
        </tr>
      </thead>
      <tbody>
        {sortedScoresArray.map((item, idx) => {
          return (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{item.name}</td>
              <td>{item.round1Score}</td>
              <td>{item.round2Score}</td>
              <td>{item.finalScore}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

function AccessibilityPanel({
  players,
  setAccess,
  switchStates,
  setSwitchStates,
  tables,
}) {
  // seating order: 0 1   2 3
  //                4 5   6 7
  //                8 9  10 11

  const aisle: number[] = [
    tables[1],
    tables[2],
    tables[5],
    tables[6],
    tables[9],
    tables[10],
  ].sort();
  const wall: number[] = [
    tables[0],
    tables[3],
    tables[4],
    tables[7],
    tables[8],
    tables[11],
  ].sort();
  const front: number[] = [tables[8], tables[9], tables[10], tables[11]].sort();
  const middle: number[] = [tables[4], tables[5], tables[6], tables[7]].sort();
  const back: number[] = [tables[0], tables[1], tables[2], tables[3]].sort();
  const frontTwoThirds: number[] = [
    tables[8],
    tables[9],
    tables[10],
    tables[11],
    tables[4],
    tables[5],
    tables[6],
    tables[7],
  ].sort();
  const backTwoThirds: number[] = [
    tables[4],
    tables[5],
    tables[6],
    tables[7],
    tables[0],
    tables[1],
    tables[2],
    tables[3],
  ].sort();
  const excludeMiddle: number[] = [
    tables[0],
    tables[1],
    tables[2],
    tables[3],
    tables[8],
    tables[9],
    tables[10],
    tables[11],
  ].sort();
  const left: number[] = [
    tables[0],
    tables[1],
    tables[4],
    tables[5],
    tables[8],
    tables[9],
  ].sort();
  const right: number[] = [
    tables[2],
    tables[3],
    tables[6],
    tables[7],
    tables[10],
    tables[11],
  ].sort();

  function handleSubmit(e, name) {
    e.preventDefault();

    const restrictions = [
      e.target.aisle.checked ? aisle : null,
      e.target.wall.checked ? wall : null,
      e.target.front.checked ? front : null,
      e.target.middle.checked ? middle : null,
      e.target.back.checked ? back : null,
      e.target.frontTwoThirds.checked ? frontTwoThirds : null,
      e.target.backTwoThirds.checked ? backTwoThirds : null,
      e.target.excludeMiddle.checked ? excludeMiddle : null,
      e.target.left.checked ? left : null,
      e.target.right.checked ? right : null,
    ].filter((item) => item !== null);

    // TODO add to sheet
    if (restrictions.length === 1) {
      setAccess(name, restrictions[1]);
    } else if (restrictions.length === 0) {
      alert(
        'Error: You have not selected any requirements.\nIf you meant to do this, please click "Remove Player" instead'
      );
    } else {
      let validTables = restrictions[0].slice();
      for (let i = 1; i < restrictions.length; i++) {
        validTables = validTables.filter((item) =>
          restrictions[i].includes(item)
        );
      }
      setAccess(name, validTables);
    }
  }

  // TODO remove from sheet
  function handleDelete(name) {
    setAccess([]);
  }

  return (
    <Accordion>
      {players
        .filter((player: Player) => player.accessibility.length > 0)
        .map((player, i) => {
          return (
            <Accordion.Item eventKey={i} key={i}>
              <Accordion.Header>{player.name}</Accordion.Header>
              <Accordion.Body>
                <Form id={i} onSubmit={(e) => handleSubmit(e, player.name)}>
                  <Row>
                    <Col>
                      <Row>
                        <label>
                          <Form.Switch
                            name='aisle'
                            checked={switchStates[i][0]}
                            onChange={() =>
                              setSwitchStates(
                                switchStates.toSpliced(
                                  i,
                                  1,
                                  switchStates[i].toSpliced(
                                    0,
                                    2,
                                    !switchStates[i][0],
                                    false
                                  )
                                )
                              )
                            }
                            inline
                          />
                          Aisle Seat
                        </label>
                      </Row>
                      <Row>
                        <label>
                          <Form.Switch
                            name='wall'
                            checked={switchStates[i][1]}
                            onChange={() =>
                              setSwitchStates(
                                switchStates.toSpliced(
                                  i,
                                  1,
                                  switchStates[i].toSpliced(
                                    0,
                                    2,
                                    false,
                                    !switchStates[i][1]
                                  )
                                )
                              )
                            }
                            inline
                          />
                          Wall Seat
                        </label>
                      </Row>
                      <hr />
                      <Row>
                        <label>
                          <Form.Switch
                            name='front'
                            checked={switchStates[i][2]}
                            onChange={() =>
                              setSwitchStates(
                                switchStates.toSpliced(
                                  i,
                                  1,
                                  switchStates[i].toSpliced(
                                    2,
                                    6,
                                    !switchStates[i][2],
                                    false,
                                    false,
                                    false,
                                    false,
                                    false
                                  )
                                )
                              )
                            }
                            inline
                          />
                          Front of Store
                        </label>
                      </Row>
                      <Row>
                        <label>
                          <Form.Switch
                            name='middle'
                            checked={switchStates[i][3]}
                            onChange={() =>
                              setSwitchStates(
                                switchStates.toSpliced(
                                  i,
                                  1,
                                  switchStates[i].toSpliced(
                                    2,
                                    6,
                                    false,
                                    !switchStates[i][3],
                                    false,
                                    false,
                                    false,
                                    false
                                  )
                                )
                              )
                            }
                            inline
                          />
                          Middle of Store
                        </label>
                      </Row>
                      <Row>
                        <label>
                          <Form.Switch
                            name='back'
                            checked={switchStates[i][4]}
                            onChange={() =>
                              setSwitchStates(
                                switchStates.toSpliced(
                                  i,
                                  1,
                                  switchStates[i].toSpliced(
                                    2,
                                    6,
                                    false,
                                    false,
                                    !switchStates[i][4],
                                    false,
                                    false,
                                    false
                                  )
                                )
                              )
                            }
                            inline
                          />
                          Back of Store
                        </label>
                      </Row>
                      <Row>
                        <label>
                          <Form.Switch
                            name='frontTwoThirds'
                            checked={switchStates[i][5]}
                            onChange={() =>
                              setSwitchStates(
                                switchStates.toSpliced(
                                  i,
                                  1,
                                  switchStates[i].toSpliced(
                                    2,
                                    6,
                                    false,
                                    false,
                                    false,
                                    !switchStates[i][5],
                                    false,
                                    false
                                  )
                                )
                              )
                            }
                            inline
                          />
                          Front Two Tables
                        </label>
                      </Row>
                      <Row>
                        <label>
                          <Form.Switch
                            name='backTwoThirds'
                            checked={switchStates[i][6]}
                            onChange={() =>
                              setSwitchStates(
                                switchStates.toSpliced(
                                  i,
                                  1,
                                  switchStates[i].toSpliced(
                                    2,
                                    6,
                                    false,
                                    false,
                                    false,
                                    false,
                                    !switchStates[i][6],
                                    false
                                  )
                                )
                              )
                            }
                            inline
                          />
                          Back Two Tables
                        </label>
                      </Row>
                      <Row>
                        <label>
                          <Form.Switch
                            name='excludeMiddle'
                            checked={switchStates[i][7]}
                            onChange={() =>
                              setSwitchStates(
                                switchStates.toSpliced(
                                  i,
                                  1,
                                  switchStates[i].toSpliced(
                                    2,
                                    6,
                                    false,
                                    false,
                                    false,
                                    false,
                                    false,
                                    !switchStates[i][7]
                                  )
                                )
                              )
                            }
                            inline
                          />
                          Front or Back Tables
                        </label>
                      </Row>
                      <hr />
                      <Row>
                        <label>
                          <Form.Switch
                            name='left'
                            checked={switchStates[i][8]}
                            onChange={() =>
                              setSwitchStates(
                                switchStates.toSpliced(
                                  i,
                                  1,
                                  switchStates[i].toSpliced(
                                    8,
                                    2,
                                    !switchStates[i][8],
                                    false
                                  )
                                )
                              )
                            }
                            inline
                          />
                          Left Side
                        </label>
                      </Row>
                      <Row>
                        <label>
                          <Form.Switch
                            name='right'
                            checked={switchStates[i][9]}
                            onChange={() =>
                              setSwitchStates(
                                switchStates.toSpliced(
                                  i,
                                  1,
                                  switchStates[i].toSpliced(
                                    8,
                                    2,
                                    false,
                                    !switchStates[i][9]
                                  )
                                )
                              )
                            }
                            inline
                          />
                          Right Side
                        </label>
                      </Row>
                    </Col>
                    {i ? (
                      <Col xs={3}>
                        <Row>
                          <Button variant='success' type='submit'>
                            Submit
                          </Button>
                        </Row>
                        <br />
                        <Row>
                          <Button variant='warning' type='reset'>
                            Reset Needs
                          </Button>
                        </Row>
                        <br />
                        <Row>
                          <Button
                            variant='danger'
                            type='button'
                            onClick={(e) => {
                              setSwitchStates(switchStates.toSpliced(i, 1));
                              handleDelete(player.name);
                            }}
                          >
                            Remove Player
                          </Button>
                        </Row>
                      </Col>
                    ) : null}
                  </Row>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
    </Accordion>
  );
}

function App() {
  const [judges, setJudges] = useState(['Cat R', 'Ezra P', 'Lilith L']);
  const [players, setPlayers] = useState(
    [
      'Ezra P',
      'Aidan C',
      'David A',
      'Rachael D',
      'Liam M',
      'Adam Cunningham',
      'Cam C',
      'Andrew H',
      'Matt L',
      'James K',
      'Shaun M',
      'Dan C',
      'Will S',
      'Cat R',
      'Oliver G',
      'Zane U',
      'Botond H',
      'Dan L',
      'Matthew M',
      'Darren M',
      'James S',
      'Alex B',
      'Ethan L',
      'Jeff S',
      'John C',
      'Lilith C',
      'Deg U',
      'Adam Crayford',
      'Martin K',
      'Barry H',
      'Rob L',
      'Serena C',
      'Dom H',
      'Phil B',
      'Tom M',
      'Leo A',
      'James C',
      'Adam J',
      'Sam C',
    ]
      .sort()
      .map((name) => {
        var player: Player = new Player(name);
        if (judges.includes(player.name)) {
          player.judge = true;
        }
        if (player.name === judges[0]) {
          player.headJudge = true;
          player.accessibility = [0];
        }
        if (['Liam M', [0, 1, 2, 3, 8, 9]].includes(player.name)) {
          player.accessibility = [];
        }
        return player;
      })
  );
  const [tableOrder, setTableOrder] = useState([
    6, 0, 1, 4, 7, 2, 3, 5, 11, 8, 9, 10,
  ]);
  const [bulkInput, setBulkInput] = useState(false);
  const [key, setKey] = useState('first');
  const [autoGenRound1, setAutoGenRound1] = useState(true);
  const [round1Players, setRound1Players] = useState([new Pod()]);
  const [round2Players, setRound2Players] = useState([new Pod()]);

  const [switchStates, setSwitchStates] = useState([[true]]);

  useEffect(() => {
    fetch(
      'https://script.google.com/macros/s/AKfycbyngUNwL4f7r55fWTcubOwnnS-GWvIxnLHvSW2sDBePD9Rg0QjBbSrb-9QC7gk1TmlQWg/exec'
    )
      .then((r) => r.json())
      .then(
        (response: {
          names: string[];
          access: [[string, [number]]];
          tables: number[];
        }) => {
          console.log(response);
          setPlayers(
            response.names.map((name) => {
              var player: Player = new Player(name);
              if (judges.includes(player.name)) {
                player.judge = true;
              }
              if (player.name === judges[0]) {
                player.headJudge = true;
                player.accessibility = [0];
              }
              if (response.access.map((x) => x[0]).includes(player.name)) {
                var access: [string, number[]] = response.access.filter(
                  (x) => x[0] === player.name
                )[0];
                if (access !== undefined) {
                  player.accessibility = access[1];
                }
              }
              return player;
            })
          );
          setTableOrder(response.tables);
          setRound1Players(shuffle(players));
          setRound2Players(shuffle(players));
          setSwitchStates(
            response.access.map((item) =>
              parseArray(item[1] as unknown as number[])
            )
          );
        }
      );
  }, []);

  function parseArray(array: number[]) {
    const aisle: number[] = [
      tableOrder[1],
      tableOrder[2],
      tableOrder[5],
      tableOrder[6],
      tableOrder[9],
      tableOrder[10],
    ].sort();
    const wall: number[] = [
      tableOrder[0],
      tableOrder[3],
      tableOrder[4],
      tableOrder[7],
      tableOrder[8],
      tableOrder[11],
    ].sort();
    const front: number[] = [
      tableOrder[8],
      tableOrder[9],
      tableOrder[10],
      tableOrder[11],
    ].sort();
    const middle: number[] = [
      tableOrder[4],
      tableOrder[5],
      tableOrder[6],
      tableOrder[7],
    ].sort();
    const back: number[] = [
      tableOrder[0],
      tableOrder[1],
      tableOrder[2],
      tableOrder[3],
    ].sort();
    const frontTwoThirds: number[] = [
      tableOrder[8],
      tableOrder[9],
      tableOrder[10],
      tableOrder[11],
      tableOrder[4],
      tableOrder[5],
      tableOrder[6],
      tableOrder[7],
    ].sort();
    const backTwoThirds: number[] = [
      tableOrder[4],
      tableOrder[5],
      tableOrder[6],
      tableOrder[7],
      tableOrder[0],
      tableOrder[1],
      tableOrder[2],
      tableOrder[3],
    ].sort();
    const excludeMiddle: number[] = [
      tableOrder[0],
      tableOrder[1],
      tableOrder[2],
      tableOrder[3],
      tableOrder[8],
      tableOrder[9],
      tableOrder[10],
      tableOrder[11],
    ].sort();
    const left: number[] = [
      tableOrder[0],
      tableOrder[1],
      tableOrder[4],
      tableOrder[5],
      tableOrder[8],
      tableOrder[9],
    ].sort();
    const right: number[] = [
      tableOrder[2],
      tableOrder[3],
      tableOrder[6],
      tableOrder[7],
      tableOrder[10],
      tableOrder[11],
    ].sort();

    let output = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
    if (array.length === 0) {
      return output;
    }
    if (array.every((item) => aisle.includes(item))) {
      output[0] = true;
    } else if (array.every((item) => wall.includes(item))) {
      output[1] = true;
    }
    if (array.every((item) => front.includes(item))) {
      output[2] = true;
    } else if (array.every((item) => middle.includes(item))) {
      output[3] = true;
    } else if (array.every((item) => back.includes(item))) {
      output[4] = true;
    } else {
      if (array.every((item) => frontTwoThirds.includes(item))) {
        output[5] = true;
      } else if (array.every((item) => backTwoThirds.includes(item))) {
        output[6] = true;
      } else if (array.every((item) => excludeMiddle.includes(item))) {
        output[7] = true;
      }
    }
    if (array.every((item) => left.includes(item))) {
      output[8] = true;
    } else if (array.every((item) => right.includes(item))) {
      output[9] = true;
    }
    return output;
  }

  function shuffle(array: Player[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    let output: Pod[] = [];
    let threes: Pod[] = [];
    let lenThrees: number =
      array.length % 4 == 0 ? 0 : (4 - (array.length % 4)) * 3;

    for (let i = lenThrees; i > 0; i -= 3) {
      threes.push(array.slice(array.length - i, array.length - (i - 3)));
    }
    for (let i = 0; i < array.length - lenThrees; i += 4) {
      output.push(array.slice(i, i + 4));
    }

    for (let i = 0; i < threes.length; i++) {
      output.push(threes[i]);
    }

    return accessNeeds(output);
  }

  function generateRound2Pods() {
    let tempArray = structuredClone(round1Players);
    tempArray = tempArray.filter((item) => {
      if (item[0] == null) {
        return false;
      }
      return true;
    });
    tempArray = tempArray
      .map((element) => {
        // sort the players in their own pod
        return element.sort((player1, player2) => {
          if (player1!.round1Score === player2!.round1Score) {
            return 0;
          } else {
            return player1!.round1Score > player2!.round1Score ? -1 : 1;
          }
        });
      })
      .sort((pod1, pod2) => {
        if (pod1[0]!.round1Score === pod2[0]!.round1Score) {
          if (pod1.length === pod2.length) {
            return 0;
          } else {
            return pod1.length > pod2.length ? -1 : 1;
          }
        } else {
          return pod1[0]!.round1Score > pod2[0]!.round1Score ? -1 : 1;
        }
      });
    let tempArray2 = structuredClone(tempArray);
    try {
      for (let i = 0; i < tempArray2.length; i++) {
        if (tempArray2[i].length === 4) {
          tempArray2[i] = [
            tempArray[0].shift() as Player,
            tempArray[1].shift() as Player,
            tempArray[2].shift() as Player,
            tempArray[3].shift() as Player,
          ];
          if (tempArray[3].length === 0) {
            tempArray.splice(3, 1);
          }
          if (tempArray[2].length === 0) {
            tempArray.splice(2, 1);
          }
          if (tempArray[1].length === 0) {
            tempArray.splice(1, 1);
          }
          if (tempArray[0].length === 0) {
            tempArray.splice(0, 1);
          }
        } else {
          tempArray2[i] = [
            tempArray[0].shift() as Player,
            tempArray[1].shift() as Player,
            tempArray[2].shift() as Player,
          ];
          if (tempArray[2].length === 0) {
            tempArray.splice(2, 1);
          }
          if (tempArray[1].length === 0) {
            tempArray.splice(1, 1);
          }
          if (tempArray[0].length === 0) {
            tempArray.splice(0, 1);
          }
        }

        tempArray.sort((a, b) => {
          if (a[0]![1] === b[0]![1]) {
            if (a.length === b.length) {
              return 0;
            } else {
              return a.length > b.length ? -1 : 1;
            }
          } else {
            return a[0]![1] > b[0]![1] ? -1 : 1;
          }
        });
      }
    } catch {
      alert('Error: Not enough players to avoid rematches');
      return shuffle(tempArray.flat().filter((item) => item != null));
    }
    return accessNeeds(tempArray2);
  }

  function accessNeeds(array: Pod[]) {
    let usedSeats: number[] = [];

    let seating = players
      .map((player) => [player.name, player.accessibility])
      .filter((x) => x[1] && x[1].length);
    seating[0][0] = judges[0];
    seating.sort((access1, access2) => {
      if (access1.length === access2.length) {
        return 0;
      } else {
        // sort by length asc (shorter to longer)
        return access1.length < access2.length ? -1 : 1;
      }
    });

    let alerted = false;
    let pods = structuredClone(array);

    seating.forEach((item) => {
      (item[1] as number[]).forEach((seat, idx, arr) => {
        if (!usedSeats.includes(seat)) {
          const originalSeat = pods.indexOf(
            pods.filter((pod) => {
              for (let j = 0; j < pod.length; j++) {
                if (pod[j]![0] === item[0]) {
                  return true;
                }
              }
              return false;
            })[0]
          );

          if (
            !(item[1] as number[]).includes(originalSeat) &&
            originalSeat !== -1
          ) {
            let tempVar = pods[originalSeat];
            pods[originalSeat] = pods[seat];
            pods[seat] = tempVar;

            if (pods[originalSeat] === undefined) {
              pods[originalSeat] = [null, null, null];
            }

            usedSeats.push(seat);
          } else if ((item[1] as number[]).includes(originalSeat)) {
            usedSeats.push(originalSeat);
          }
        } // TODO fix alerts so it fires consistently and at the right time
        // else if (!alerted && idx+1 === arr.length) {
        //   alerted = true
        //   alert("1 or more players could not be seated at a preferred table.\nPlease ensure that all pods are acceptable")
        // }
      });
    });

    const originalSeat = pods.indexOf(
      pods.filter((pod) => {
        for (let j = 0; j < pod.length; j++) {
          if (pod[j]?.name === seating[0][0]) {
            return true;
          }
        }
        return false;
      })[0]
    );

    let tempVar = pods[originalSeat];
    pods[originalSeat] = pods[0];
    pods[0] = tempVar;

    return pods;
  }

  function handleSubmitPlayer(e) {
    e.preventDefault();
    const name = e.target.nameInput.value;
    if (bulkInput) {
      const namesArr = name
        .replaceAll(' ,', '\n')
        .replaceAll(', ', '\n')
        .replaceAll(',', '\n')
        .split('\n')
        .filter((item) => item !== '');
      setPlayers([
        ...namesArr.map((playerName) => new Player(playerName)),
        ...players,
      ]);
    } else if (name !== '') {
      setPlayers([new Player(name), ...players]);
    }
    setAutoGenRound1(true);

    e.target.reset();
  }

  function handleDeletePlayer(e, name) {
    e.preventDefault();
    const newPlayers = players.filter((item) => item.name != name);

    setPlayers(newPlayers);
    setAutoGenRound1(true);
  }

  function handleSubmitRound1() {
    setPlayers(
      round1Players
        .flat()
        .filter((item) => item != null)
        .sort()
    );
  }

  function handleSubmitRound2() {
    setPlayers(
      round2Players
        .flat()
        .filter((item) => item != null)
        .sort()
    );
  }

  return (
    <Tab.Container
      id='left-tabs-example'
      activeKey={key}
      onSelect={(k) => {
        switch (k) {
          case 'second':
            if (autoGenRound1) {
              setAutoGenRound1(false);
              setRound1Players(shuffle(players.slice()));
            }
            break;
          case 'third':
            setRound2Players(generateRound2Pods());
            break;
          case 'fourth':
            break;
          default:
            break;
        }
        setKey(k as string);
      }}
    >
      <Row>
        <Col sm={1}>
          <Nav justify variant='underline' className='flex-column'>
            <Nav.Item>
              <Nav.Link eventKey='first'>Players</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='second'>Round 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='third'>Round 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='fourth'>Final Scores</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={11}>
          <Tab.Content>
            <Tab.Pane eventKey='first'>
              <Container>
                <Form name='playerForm' onSubmit={handleSubmitPlayer}>
                  <InputGroup>
                    {bulkInput ? (
                      <Form.Control
                        as='textarea'
                        name='nameInput'
                        size='lg'
                        placeholder='Player Names'
                      />
                    ) : (
                      <Form.Control
                        name='nameInput'
                        size='lg'
                        placeholder='Player Name'
                        type='text'
                      />
                    )}
                    <InputGroup.Text as='label' style={{ userSelect: 'none' }}>
                      <Form.Switch
                        inline
                        defaultChecked={bulkInput}
                        onClick={() => setBulkInput(!bulkInput)}
                      />
                      Bulk Input
                    </InputGroup.Text>
                    {bulkInput ? <Button type='submit'>Submit</Button> : null}
                  </InputGroup>
                </Form>
              </Container>
              <br />
              <PlayerNames
                players={players}
                handleDelete={handleDeletePlayer}
                addJudge={(name) => {
                  setPlayers([
                    ...players.filter((player) => player.judge),
                    {
                      ...players.filter((player) => player.name === name)[0],
                      judge: true,
                    },
                    ...players.filter(
                      (player) => player.name !== name && !player.judge
                    ),
                  ]);
                  setJudges([...judges, name]);
                }}
                removeJudge={(name) => {
                  setPlayers([
                    ...players.filter(
                      (player) => player.judge && player.name !== name
                    ),
                    {
                      ...players.filter((player) => player.name === name)[0],
                      judge: false,
                      headJudge: false,
                    },
                    ...players.filter(
                      (player) => player.name !== name && !player.judge
                    ),
                  ]);
                  setJudges([...judges, name]);
                }}
                setHeadJudge={(name: string) =>
                  setPlayers([
                    {
                      ...players.filter((player) => player.name === name)[0],
                      headJudge: true,
                    },
                    ...players
                      .filter((player) => player.judge && player.name !== name)
                      .map((player) => {
                        return { ...player, headJudge: false };
                      }),
                    ...players.filter((player) => !player.judge),
                  ])
                }
                setPage={() => setKey('accessibility')}
                setAccess={(name: string) => {
                  var idx = players.findIndex((ele) => ele.name == name);
                  players.splice(idx, 1, {
                    ...players[idx],
                    accessibility: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                  });
                }}
                setSwitch={() =>
                  setSwitchStates([
                    ...switchStates,
                    [
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                    ],
                  ])
                }
              />
              <br />
              <Container>
                <Button
                  variant='danger'
                  onClick={() => {
                    setPlayers([]);
                  }}
                >
                  Clear Names
                </Button>
              </Container>
            </Tab.Pane>
            <Tab.Pane eventKey='second'>
              <Container>
                <StoreMap
                  pods={round1Players}
                  round={1}
                  setPlayers={setRound1Players}
                  tableOrder={tableOrder}
                />
                <br />
                <Row>
                  <Col className='pods-button-left d-grid'>
                    <Button
                      size='lg'
                      variant='warning'
                      onClick={() => {
                        setRound1Players(shuffle(players.slice()));
                      }}
                    >
                      Shuffle Pods
                    </Button>
                  </Col>
                  <Col lg={1}> </Col>
                  <Col className='pods-button-right d-grid'>
                    <Button
                      size='lg'
                      variant='success'
                      onClick={handleSubmitRound1}
                    >
                      Submit Scores
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Tab.Pane>
            <Tab.Pane eventKey='third'>
              <Container>
                <StoreMap
                  pods={round2Players}
                  round={2}
                  setPlayers={setRound2Players}
                  tableOrder={tableOrder}
                />
                <br />
                <Row>
                  <Col className='pods-button-left d-grid'>
                    <Button
                      size='lg'
                      variant='warning'
                      onClick={() => setRound2Players(generateRound2Pods())}
                    >
                      Regenerate Pods
                    </Button>
                  </Col>
                  <Col lg={1}> </Col>
                  <Col className='pods-button-right d-grid'>
                    <Button
                      size='lg'
                      variant='success'
                      onClick={handleSubmitRound2}
                    >
                      Submit Scores
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Tab.Pane>
            <Tab.Pane eventKey='fourth'>
              {/* TODO add export to google sheets (something in that vein) */}
              <PlayerScores scoresArray={players} />
            </Tab.Pane>
            <Tab.Pane eventKey='accessibility'>
              <AccessibilityPanel
                players={players}
                setAccess={(name: string, accessibility: number[]) => {
                  var idx = players.findIndex((ele) => ele.name == name);
                  players.splice(idx, 1, {
                    ...players[idx],
                    accessibility: accessibility,
                  });
                }}
                switchStates={switchStates}
                setSwitchStates={setSwitchStates}
                tables={tableOrder}
              />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default App;
