import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Player } from './classes.ts';
import React from 'react';

export function AccessibilityPanel({
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
