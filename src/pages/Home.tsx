import { Button } from "../components/Button";
import { Photo } from "../components/Photo";

export const Home = () => {
  return (
    <div className="container">
      <div className="row scroll">
        <div className="col-12">
          <div className="card border-0">
            <Photo />
            <div className="row">
              <div className="col-4"></div>
              <div className="col-2">
                <Button classes="btn-success" label="Like" />
              </div>
              <div className="col-2">
                <Button classes="btn-danger" label="Dislike" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
