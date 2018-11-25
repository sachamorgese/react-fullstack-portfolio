export const CREATE_NEW_DRAFT = 'CREATE_NEW_DRAFT';
export const CREATE_NEW_DRAFT_SUBMIT = 'CREATE_NEW_DRAFT_SUBMIT';
export const CREATE_NEW_DRAFT_SUCCESS = 'CREATE_NEW_DRAFT_SUCCESS';
export const CREATE_NEW_DRAFT_FAILURE = 'CREATE_NEW_DRAFT_FAILURE';

const createNewDraft = () => ({
  type: CREATE_NEW_DRAFT,
});

export default {
  createNewDraft,
};
