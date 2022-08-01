import { useMutation, gql } from '@apollo/client';

const FORM_DATA_CHECK = gql`
  mutation FormDataCheck(
    $firstName: String
    $lastName: String
    $mail: String!
  ) {
    formData(firstName: $firstName, lastName: $lastName, mail: $mail) {
      firstName
      lastName
      mail
      error {
        message
        item
      }
    }
  }
`;

export function useUserCreate() {
  const [handleSubmit, { data, loading, error }] = useMutation(FORM_DATA_CHECK)
  // console.log('loading: ', loading)
  // console.log('error: ', error)
  // console.log('data: ', data)

  return {handleSubmit, data, loading, error}
}
