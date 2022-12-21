const BASEURL = "https://fitnesstrac-kr.herokuapp.com/";

// API DOCS: http://fitnesstrac-kr.herokuapp.com/docs
// API ENDPOINTS: http://fitnesstrac-kr.herokuapp.com/api/some-endpoint

export { default as AuthorizeUser } from "./users";
export { default as Routines } from "./routines";
export { default as Activities } from "./activities";
export { default as Routine_Activities } from "./routine_activities";

export default BASEURL;