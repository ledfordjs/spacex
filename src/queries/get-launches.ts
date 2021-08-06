import { gql } from '@apollo/client';

export const GET_LAUNCHES = gql`
  query GetLaunches {
    launchesPast(limit: 50) {
      mission_name
    }
  }
`;