/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLaunches
// ====================================================

export interface GetLaunches_launchesPast {
  __typename: "Launch";
  mission_name: string | null;
}

export interface GetLaunches {
  launchesPast: (GetLaunches_launchesPast | null)[] | null;
}
