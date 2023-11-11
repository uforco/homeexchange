
import Contextdata from '../../hooks/Contexthook';
import Bookingserviceitem from './Bookingserviceitem';
const Bookingitem = () => {
    const {userbooklist} = Contextdata()
    // console.log(userbooklist)

  return (
    <div  >
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead >
            <tr  >
              <th>Service Name</th>
              <th>Service Date</th>
              <th>Status</th>
              <th>Show Details</th>
            </tr>
          </thead>
          <tbody>

            {
                userbooklist?.map((item, idx) => <Bookingserviceitem key={idx} data={item} ></Bookingserviceitem> )
            }
          </tbody>
          {/* foot */}
          <tfoot>
                {/* see */}
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Bookingitem;
