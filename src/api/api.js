const BASEURL = "https://fitnesstrac-kr.herokuapp.com/api";

// API DOCS: http://fitnesstrac-kr.herokuapp.com/docs
// API ENDPOINTS: http://fitnesstrac-kr.herokuapp.com/api/some-endpoint

// export { default as getCurrentUser } from "./users";
export { deleteR_ActbyRoutineId, updateRoutineActivity } from "./routine_activities";
export { allActivities, newActivity, updateActivity, pubRoutinesByActivity } from "./activities"
export { allRoutines, newRoutine, updateRoutine, deleteRoutine, addActivityToRoutine } from "./routines"

export default BASEURL;