/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRentOrder = /* GraphQL */ `
  subscription OnCreateRentOrder {
    onCreateRentOrder {
      id
      cardId
      borrowerUserId
      lenderUserID
      rentValue
      borrowerEmailID
      lenderEmailID
      commonID
      createdAt
      updatedAt
      listing {
        id
        title
        categoryName
        categoryID
        description
        images
        locationID
        locationName
        owner
        rentValue
        userID
        commonID
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateRentOrder = /* GraphQL */ `
  subscription OnUpdateRentOrder {
    onUpdateRentOrder {
      id
      cardId
      borrowerUserId
      lenderUserID
      rentValue
      borrowerEmailID
      lenderEmailID
      commonID
      createdAt
      updatedAt
      listing {
        id
        title
        categoryName
        categoryID
        description
        images
        locationID
        locationName
        owner
        rentValue
        userID
        commonID
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteRentOrder = /* GraphQL */ `
  subscription OnDeleteRentOrder {
    onDeleteRentOrder {
      id
      cardId
      borrowerUserId
      lenderUserID
      rentValue
      borrowerEmailID
      lenderEmailID
      commonID
      createdAt
      updatedAt
      listing {
        id
        title
        categoryName
        categoryID
        description
        images
        locationID
        locationName
        owner
        rentValue
        userID
        commonID
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateListing = /* GraphQL */ `
  subscription OnCreateListing {
    onCreateListing {
      id
      title
      categoryName
      categoryID
      description
      images
      locationID
      locationName
      owner
      rentValue
      userID
      commonID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateListing = /* GraphQL */ `
  subscription OnUpdateListing {
    onUpdateListing {
      id
      title
      categoryName
      categoryID
      description
      images
      locationID
      locationName
      owner
      rentValue
      userID
      commonID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteListing = /* GraphQL */ `
  subscription OnDeleteListing {
    onDeleteListing {
      id
      title
      categoryName
      categoryID
      description
      images
      locationID
      locationName
      owner
      rentValue
      userID
      commonID
      createdAt
      updatedAt
    }
  }
`;
