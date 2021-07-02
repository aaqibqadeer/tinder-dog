import { useEffect } from "react";
import { Button } from "../components/Button";
import { Photo } from "../components/Photo";
import { useFetchImage } from "../utils/api";
import { Overlay } from "../style";
import { withAction } from "../store";
import { ActionState } from "../types";

export const Home = withAction(
  ({ appendAction }: { appendAction: Function }) => {
    const { res, fetchImage } = useFetchImage();

    useEffect(() => {
      fetchImage();
    }, []);

    const imageDisliked = () => {
      const newAction: ActionState = {
        imageLink: res.imageLink,
        action: "Disliked",
      };
      appendAction(newAction);
      return fetchImage();
    };

    const imageLiked = () => {
      const newAction: ActionState = {
        imageLink: res.imageLink,
        action: "Liked",
      };
      appendAction(newAction);
      return fetchImage();
    };

    return (
      <>
        {res.loading && (
          <Overlay>
            <div className="d-flex justify-content-center">
              <div className="spinner-border m-5 p-5" role="status"></div>
            </div>
          </Overlay>
        )}
        {!res.loading && (
          <div className="container">
            <div className="row scroll">
              <div className="col-12">
                <div className="card border-0">
                  <Photo imgLink={res.imageLink} />
                  <div className="row justify-content-center">
                    <div className="col-2">
                      <Button
                        classes="btn-success"
                        label="Like"
                        handleUpdate={imageLiked}
                      />
                    </div>
                    <div className="col-2">
                      <Button
                        classes="btn-danger"
                        label="Dislike"
                        handleUpdate={imageDisliked}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
);
