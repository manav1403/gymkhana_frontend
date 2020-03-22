import gql from "graphql-tag";
import { SIZES_FRAGMENT } from "./sizesFragment";

export const OFFICE_BEARER_FRAGMENT = gql`
  fragment OfficeBearerFields on UserProfileNode {
    phone
    cover {
      ...Sizes
    }
    avatar {
      ...Sizes
    }
    about
    user {
      firstName
      lastName
      email
    }
  }
  ${SIZES_FRAGMENT}
`;
