import { ChangeEvent } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Pod } from './classes.ts';
import React from 'react';

export function PodTable({
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
