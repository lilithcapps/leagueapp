import Table from 'react-bootstrap/Table';
import { Player } from './classes.ts';
import React from 'react';

export function PlayerScores({ scoresArray }) {
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
