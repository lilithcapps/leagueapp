import { useState, useEffect } from 'react';
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
import './App.css';

function PodTable({ tableNames, round, setScores }) {
  function handleChange(e, num) {
    setScores(parseFloat(e.target.value), num);
  }

  if (tableNames != null && tableNames[0][0] != null) {
    return (
      <>
        <Form>
          <Form.Group as={Row}>
            <Form.Label
              column
              htmlFor={tableNames[0][0]}
              className='player-name'
              sm={4}
            >
              {tableNames[0][0]}
            </Form.Label>
            <Col sm={2}>
              <Form.Control
                id={tableNames[0][0]}
                plaintext
                value={tableNames[0][round]}
                type='number'
                onChange={(e) => handleChange(e, 0)}
              ></Form.Control>
            </Col>
            <Form.Label
              column
              htmlFor={tableNames[1][0]}
              className='player-name'
              sm={4}
            >
              {tableNames[1][0]}
            </Form.Label>
            <Col sm={2}>
              <Form.Control
                id={tableNames[1][0]}
                plaintext
                value={tableNames[1][round]}
                type='number'
                onChange={(e) => handleChange(e, 1)}
              ></Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label htmlFor={tableNames[2][0]} column sm={4}>
              {tableNames[2][0]}
            </Form.Label>
            <Col sm={2}>
              <Form.Control
                id={tableNames[2][0]}
                plaintext
                value={tableNames[2][round]}
                type='number'
                onChange={(e) => handleChange(e, 2)}
              ></Form.Control>
            </Col>
            {tableNames[3] == null || (
              <Form.Label htmlFor={tableNames[3][0]} column sm={4}>
                {tableNames[3][0]}
              </Form.Label>
            )}
            {tableNames[3] == null || (
              <Col sm={2}>
                <Form.Control
                  id={tableNames[3][0]}
                  plaintext
                  value={tableNames[3][round]}
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

function StoreMap({ podNames, round, setPlayerScores, tableOrder }) {
  function setProxy(score, playerNum, podNum) {
    setPlayerScores([
      ...podNames.toSpliced(
        podNum,
        1,
        podNames[podNum].toSpliced(
          playerNum,
          1,
          podNames[podNum][playerNum].toSpliced(round, 1, score)
        )
      ),
    ]);
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
              tableNames={podNames[tableOrder[0]]}
              round={round}
              setScores={(score, playerNum) => setProxy(score, playerNum, tableOrder[0])}
            />
          </Col>
          <Col className='column curve-right'>
            <PodTable
              tableNames={podNames[tableOrder[1]]}
              round={round}
              setScores={(score, playerNum) => setProxy(score, playerNum, tableOrder[1])}
            />
          </Col>
          <Col lg={1}> </Col>
          <Col className='column curve-left'>
            <PodTable
              tableNames={podNames[tableOrder[2]]}
              round={round}
              setScores={(score, playerNum) => setProxy(score, playerNum, tableOrder[2])}
            />
          </Col>
          <Col className='column curve-right'>
            <PodTable
              tableNames={podNames[tableOrder[3]]}
              round={round}
              setScores={(score, playerNum) => setProxy(score, playerNum, tableOrder[3])}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col className='column curve-left'>
            <PodTable
              tableNames={podNames[tableOrder[4]]}
              round={round}
              setScores={(score, playerNum) => setProxy(score, playerNum, tableOrder[4])}
            />
          </Col>
          <Col className='column curve-right'>
            <PodTable
              tableNames={podNames[tableOrder[5]]}
              round={round}
              setScores={(score, playerNum) => setProxy(score, playerNum, tableOrder[5])}
            />
          </Col>
          <Col lg={1}> </Col>
          <Col className='column curve-left'>
            <PodTable
              tableNames={podNames[tableOrder[6]]}
              round={round}
              setScores={(score, playerNum) => setProxy(score, playerNum, tableOrder[6])}
            />
          </Col>
          <Col className='column curve-right'>
            <PodTable
              tableNames={podNames[tableOrder[7]]}
              round={round}
              setScores={(score, playerNum) => setProxy(score, playerNum, tableOrder[7])}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col className='column curve-left'>
            <PodTable
              tableNames={podNames[tableOrder[8]]}
              round={round}
              setScores={(score, playerNum) => setProxy(score, playerNum, tableOrder[8])}
            />
          </Col>
          <Col className='column curve-right'>
            <PodTable
              tableNames={podNames[tableOrder[9]]}
              round={round}
              setScores={(score, playerNum) => setProxy(score, playerNum, tableOrder[9])}
            />
          </Col>
          <Col lg={1}> </Col>
          <Col className='column curve-left'>
            <PodTable
              tableNames={podNames[tableOrder[10]]}
              round={round}
              setScores={(score, playerNum) => setProxy(score, playerNum, tableOrder[10])}
            />
          </Col>
          <Col className='column curve-right'>
            <PodTable
              tableNames={podNames[tableOrder[11]]}
              round={round}
              setScores={(score, playerNum) => setProxy(score, playerNum, tableOrder[11])}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

function PlayerNames({
  names,
  handleDelete,
  judgeNames,
  setJudgeNames,
  setPage,
  setAccess,
  setSwitch,
}) {
  function handleRightClick(e, judgeName) {
    e.preventDefault();
    setJudgeNames(judgeNames.filter((item) => item !== judgeName));
  }

  function handleClick(e) {
    setJudgeNames([...judgeNames, e.triggerEvent.target.textContent]);
  }

  function handleClickJudge(e) {
    e.preventDefault();
    setJudgeNames([
      e.target.outerText,
      ...judgeNames.filter((item) => item !== e.target.textContent),
    ]);
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

  const playerNames = names.filter((item) => !judgeNames.includes(item));

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
            {split.map((name, j) => {
              return (
                <ListGroupItem
                  action
                  onClick={(event) => handleDelete(event, name)}
                  onContextMenu={handleContextMenu}
                  key={j}
                >
                  {name}
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
            {judgeNames
              .filter((item) => names.includes(item))
              .map((name, i) => {
                return (
                  <ListGroupItem
                    variant='success'
                    action
                    className='d-flex justify-content-between align-items-start align-items-center'
                    onClick={handleClickJudge}
                    onContextMenu={(event) => handleRightClick(event, name)}
                    key={i}
                  >
                    <div>{name}</div>
                    {i ? null : <Badge bg='success'>Head Judge</Badge>}
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
            setAccess(e.triggerEvent.target.textContent);
            setSwitch();
            setPage();
          }}
        >
          Set accessibility needs
        </Item>
        <Item id='judge' onClick={handleClick} >
          Set as judge
        </Item>
      </Menu>
    </Container>
  );
}

function PlayerScores({ scoresArray }) {
  const sortedScoresArray = scoresArray
    .map((item) => {
      return [item[0], item[1], item[2], item[1] + item[2]];
    })
    .sort((a, b) => {
      if (a[3] === b[3]) {
        return 0;
      } else {
        return a[3] > b[3] ? -1 : 1;
      }
    });

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
              <td>{item[0]}</td>
              <td>{item[1]}</td>
              <td>{item[2]}</td>
              <td>{item[3]}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

function AccessibilityPanel({
  access,
  setAccess,
  switchStates,
  setSwitchStates,
  tables
}) {
  // seating order: 0 1   2 3
  //                4 5   6 7
  //                8 9  10 11

  const aisle = [tables[1], tables[2], tables[5], tables[6], tables[9], tables[10]].toSorted();
  const wall = [tables[0], tables[3], tables[4], tables[7], tables[8], tables[11]].toSorted();
  const front = [tables[8], tables[9], tables[10], tables[11]].toSorted();
  const middle = [tables[4], tables[5], tables[6], tables[7]].toSorted();
  const back = [tables[0], tables[1], tables[2], tables[3]].toSorted();
  const frontTwoThirds = [tables[8], tables[9], tables[10], tables[11], tables[4], tables[5], tables[6], tables[7]].toSorted();
  const backTwoThirds = [tables[4], tables[5], tables[6], tables[7],tables[0], tables[1], tables[2], tables[3]].toSorted();
  const excludeMiddle = [tables[0], tables[1], tables[2], tables[3], tables[8], tables[9], tables[10], tables[11]].toSorted();
  const left = [tables[0], tables[1], tables[4], tables[5], tables[8], tables[9]].toSorted();
  const right = [tables[2], tables[3], tables[6], tables[7], tables[10], tables[11]].toSorted();

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
      setAccess(access.toSpliced(e.target.id, 1, [name, restrictions[0]]));
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
      setAccess(access.toSpliced(e.target.id, 1, [name, validTables]));
      }
  }

  // TODO remove from sheet
  function handleDelete(name) {
    setAccess(access.filter((item) => item[0] !== name));
  }

  return (
    <Accordion>
      {access.map((item, i) => {
        return (
          <Accordion.Item eventKey={i} key={i}>
            <Accordion.Header>{item[0]}</Accordion.Header>
            <Accordion.Body>
              <Form id={i} onSubmit={(e) => handleSubmit(e, item[0])}>
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
                                  !switchStates[i][2], false, false, false, false, false
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
                                  false, !switchStates[i][3], false, false, false, false
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
                                  false, false, !switchStates[i][4], false, false, false
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
                                  false, false, false, !switchStates[i][5], false, false
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
                                  false, false, false, false, !switchStates[i][6], false
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
                                  false, false, false, false, false, !switchStates[i][7]
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
                                  !switchStates[i][8], false
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
                                  false, !switchStates[i][9]
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
                            handleDelete(item[0]);
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
  const [playerNames, setPlayerNames] = useState(
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
    ].sort()
  );
  const [judgeNames, setJudgeNames] = useState(['Cat R', 'Ezra P', 'Lilith L']);
  const [access, setAccess] = useState([
    ['Head Judge', [0]],
    ['Liam M', [0, 1, 2, 3, 8, 9]],
  ]);
  const [tableOrder, setTableOrder] = useState([
    6,
    0,
    1,
    4,
    7,
    2,
    3,
    5,
    11,
    8,
    9,
    10,
  ]);
  const [bulkInput, setBulkInput] = useState(false);
  const [key, setKey] = useState('first');
  const [autoGenRound1, setAutoGenRound1] = useState(true);
  const [playerScores, setPlayerScores] = useState(
    playerNames.map((name) => [name, 0, 0])
  );
  const [round1Players, setRound1Players] = useState(
    shuffle(playerScores.slice())
  );
  const [round2Players, setRound2Players] = useState(
    shuffle(playerScores.slice())
  );

  const [switchStates, setSwitchStates] = useState(
    access.map((item) => parseArray(item[1]))
  );

  useEffect(() => {
    fetch(
      'https://script.google.com/macros/s/AKfycbyngUNwL4f7r55fWTcubOwnnS-GWvIxnLHvSW2sDBePD9Rg0QjBbSrb-9QC7gk1TmlQWg/exec'
    )
      .then((r) => r.json())
      .then((r) => {
        console.log(r)
        setPlayerNames(r.names);
        setAccess(r.access);
        setTableOrder(r.tables);
        const scores = r.names.map((name) => [name, 0, 0])
        setPlayerScores(scores);
        setRound1Players(shuffle(scores))
        setRound2Players(shuffle(scores))
        setSwitchStates(r.access.map((item) => parseArray(item[1])))
      });
  }, []);

  function parseArray(array) {
    const aisle = [tableOrder[1], tableOrder[2], tableOrder[5], tableOrder[6], tableOrder[9], tableOrder[10]].toSorted();
    const wall = [tableOrder[0], tableOrder[3], tableOrder[4], tableOrder[7], tableOrder[8], tableOrder[11]].toSorted();
    const front = [tableOrder[8], tableOrder[9], tableOrder[10], tableOrder[11]].toSorted();
    const middle = [tableOrder[4], tableOrder[5], tableOrder[6], tableOrder[7]].toSorted();
    const back = [tableOrder[0], tableOrder[1], tableOrder[2], tableOrder[3]].toSorted();
    const frontTwoThirds = [tableOrder[8], tableOrder[9], tableOrder[10], tableOrder[11], tableOrder[4], tableOrder[5], tableOrder[6], tableOrder[7]].toSorted();
    const backTwoThirds = [tableOrder[4], tableOrder[5], tableOrder[6], tableOrder[7],tableOrder[0], tableOrder[1], tableOrder[2], tableOrder[3]].toSorted();
    const excludeMiddle = [tableOrder[0], tableOrder[1], tableOrder[2], tableOrder[3], tableOrder[8], tableOrder[9], tableOrder[10], tableOrder[11]].toSorted();
    const left = [tableOrder[0], tableOrder[1], tableOrder[4], tableOrder[5], tableOrder[8], tableOrder[9]].toSorted();
    const right = [tableOrder[2], tableOrder[3], tableOrder[6], tableOrder[7], tableOrder[10], tableOrder[11]].toSorted();

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

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    let output = [];
    let threes = [];
    let lenThrees = array.length % 4 == 0 ? 0 : (4 - (array.length % 4)) * 3;

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
      if (item[0][0] == null) {
        return false;
      }
      return true;
    });
    tempArray = tempArray
      .map((element) => {
        return element.sort((a, b) => {
          if (a[1] === b[1]) {
            return 0;
          } else {
            return a[1] > b[1] ? -1 : 1;
          }
        });
      })
      .sort((a, b) => {
        if (a[0][1] === b[0][1]) {
          if (a.length === b.length) {
            return 0;
          } else {
            return a.length > b.length ? -1 : 1;
          }
        } else {
          return a[0][1] > b[0][1] ? -1 : 1;
        }
      });
    let tempArray2 = structuredClone(tempArray);
    try {
    for (let i = 0; i < tempArray2.length; i++) {
      if (tempArray2[i].length === 4) {
        tempArray2[i] = [
          tempArray[0].shift(),
          tempArray[1].shift(),
          tempArray[2].shift(),
          tempArray[3].shift(),
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
          tempArray[0].shift(),
          tempArray[1].shift(),
          tempArray[2].shift(),
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
        if (a[0][1] === b[0][1]) {
          if (a.length === b.length) {
            return 0;
          } else {
            return a.length > b.length ? -1 : 1;
          }
        } else {
          return a[0][1] > b[0][1] ? -1 : 1;
        }
      });
    } } catch {
      alert("Error: Not enough players to avoid rematches")
      return(shuffle(tempArray))
    }
    return accessNeeds(tempArray2);
  }

  function accessNeeds(array) {
    let usedSeats = [];

    let seating = structuredClone(access);
    seating[0][0] = judgeNames[0];
    seating.sort((a, b) => {
      if (a.length === b.length) {
        return 0;
      } else {
        // sort by length asc (shorter to longer)
        return a.length < b.length ? -1 : 1;
      }
    });

    let alerted = false;
    let pods = structuredClone(array);

    seating.forEach((item) => {
      item[1].forEach((seat, idx, arr) => {
        if (!usedSeats.includes(seat)) {
          const originalSeat = pods.indexOf(
            pods.filter((i) => {
              for (let j = 0; j < i.length; j++) {
                if (i[j][0] === item[0]) {
                  return true;
                }
              }
              return false;
            })[0]
          );

          if (!item[1].includes(originalSeat) && originalSeat !== -1) {
            let tempVar = pods[originalSeat];
            pods[originalSeat] = pods[seat];
            pods[seat] = tempVar;

            if (pods[originalSeat] === undefined) {
              pods[originalSeat] = [[null], [null], [null]];
            }

            usedSeats.push(seat);
          } else if (item[1].includes(originalSeat)) {
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
      pods.filter((i) => {
        for (let j = 0; j < i.length; j++) {
          if (i[j][0] === seating[0][0]) {
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
      setPlayerNames([...namesArr, ...playerNames]);
      setPlayerScores([
        ...namesArr.map((name) => [name, 0, 0]),
        ...playerScores,
      ]);
    } else if (name !== '') {
      setPlayerNames([name, ...playerNames]);
      setPlayerScores([[name, 0, 0], ...playerScores]);
    }
    setAutoGenRound1(true);

    e.target.reset();
  }

  function handleDeletePlayer(e, name) {
    e.preventDefault();
    const newNames = playerNames.filter((item) => item !== name);
    const newScores = playerScores.filter((item) => item[0] !== name);

    setPlayerNames([...newNames]);
    setPlayerScores([...newScores]);
    setAutoGenRound1(true);
  }

  function handleSubmitRound1() {
    setPlayerScores(
      round1Players
        .flat()
        .filter((item) => item[0] != null)
        .sort()
        .map((ele, idx) => [ele[0], ele[1], playerScores[idx][2]])
    );
  }

  function handleSubmitRound2() {
    setPlayerScores(
      round2Players
        .flat()
        .filter((item) => item[0] != null)
        .sort()
        .map((ele, idx) => [ele[0], playerScores[idx][1], ele[2]])
    );
  }

  return (
    <Tab.Container
      id='left-tabs-example'
      activeKey={key}
      onSelect={(k) => {
        switch (k) {
          case 'second':
            autoGenRound1 &&
              (setAutoGenRound1(false) ||
                setRound1Players(shuffle(playerScores.slice())));
            break;
          case 'third':
            setRound2Players(generateRound2Pods());
            break;
          case 'fourth':
            console.log(round1Players)
            const round1PlayersFlat = round1Players
              .flat()
              .filter((item) => playerNames.includes(item[0]))
              .sort();
            console.log(round2Players)
            const round2PlayersFlat = round2Players
              .flat()
              .filter((item) => playerNames.includes(item[0]))
              .sort();
            setPlayerScores(
              playerNames.map((ele, idx) => [
                ele,
                round1PlayersFlat[idx][1],
                round2PlayersFlat[idx][2],
              ])
            );
            break;
          default:
            break;
        }
        setKey(k);
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
                names={playerNames}
                handleDelete={handleDeletePlayer}
                judgeNames={judgeNames}
                setJudgeNames={setJudgeNames}
                setPage={() => setKey('accessibility')}
                setAccess={(name) =>
                  access.filter((item) => item[0] === name).length === 0
                    ? setAccess([...access, [name, []]])
                    : ''
                }
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
                <Button variant='danger' onClick={() => {
                  setPlayerNames([]);
                  setPlayerScores([]);
                  }}>
                  Clear Names
                </Button>
              </Container>
            </Tab.Pane>
            <Tab.Pane eventKey='second'>
              <Container>
                <StoreMap
                  podNames={round1Players}
                  round={1}
                  setPlayerScores={setRound1Players}
                  tableOrder={tableOrder}
                />
                <br />
                <Row>
                  <Col className='pods-button-left d-grid'>
                    <Button
                      size='lg'
                      variant='warning'
                      onClick={() => {
                        setRound1Players(shuffle(playerScores.slice()));
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
                  podNames={round2Players}
                  round={2}
                  setPlayerScores={setRound2Players}
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
              <PlayerScores scoresArray={playerScores} />
            </Tab.Pane>
            <Tab.Pane eventKey='accessibility'>
              <AccessibilityPanel
                access={access}
                setAccess={setAccess}
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
