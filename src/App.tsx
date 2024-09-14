import { useState, useEffect } from 'react';
import 'react-contexify/ReactContexify.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { Player, Pod } from './classes.ts';
import './App.css';
import React from 'react';
import { PlayerNames } from './PlayerNames';
import { PlayerScores } from './PlayerScores';
import { AccessibilityPanel } from './AccessibilityPanel';
import { StoreMap } from './StoreMap';

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

  // required
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

  // should be part of reducer
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

  // should be part of reducer for r1 pods
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

  // should be part of reducer for r2 pods
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

  // should be part of reducer for both rounds of pods
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

  // should be refactored into Players page
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

  // should be refactored into Players page
  function handleDeletePlayer(e, name) {
    e.preventDefault();
    const newPlayers = players.filter((item) => item.name != name);

    setPlayers(newPlayers);
    setAutoGenRound1(true);
  }

  // should be refactored into r1 page
  function handleSubmitRound1() {
    setPlayers(
      round1Players
        .flat()
        .filter((item) => item != null)
        .sort()
    );
  }

  // should be refactored into r2 page
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
