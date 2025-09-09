import { gql } from "@apollo/client";
import { REPOSITORY_FIELDS } from "./fragments";

export const GET_REPOSITORIES = gql`
  query Repositories($orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy) {
    repositories(orderDirection: $orderDirection, orderBy: $orderBy) {
      edges {
        node {
          ...repositoryFields
        }
      }
    }
  }

  ${REPOSITORY_FIELDS}
`;

export const GET_USER_INFO = gql`
  query {
    me {
      id
      username
    }
  }
`;

export const GET_REPOSITORY = gql`
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...repositoryFields
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }

  ${REPOSITORY_FIELDS}
`;
