import { withAction } from "../store";
import { ActionState } from "../types";

export const Histroy = withAction(({ action }: { action: ActionState[] }) => {
  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image Link</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {action.map((item, index) => {
            return (
              <tr key={index}>
                <td>#</td>
                <td>{item.imageLink}</td>
                <td>{item.action}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
});
