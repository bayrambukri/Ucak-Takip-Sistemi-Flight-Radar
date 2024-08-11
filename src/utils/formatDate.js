import moment from "moment/moment";
import "moment/locale/tr";
// unix formatındaki veriyi normal tarihe çevirir
const formatDate = (unix_time) => {
 
  const formatted = new Date(unix_time * 1000);

  return moment(formatted).calendar();
};

export default formatDate;
