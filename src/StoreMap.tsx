import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React from 'react';
import { PodTable } from './PodTable';

export function StoreMap({ pods, round, setPlayers, tableOrder }) {
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
