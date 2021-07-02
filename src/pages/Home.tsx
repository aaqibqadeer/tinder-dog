import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Photo } from "../components/Photo";
import { useFetchImage } from "../utils/api";
import { Overlay } from "../style";

export const Home = () => {
  const { res, fetchImage } = useFetchImage();

  useEffect(() => {
    fetchImage();
  }, []);

  useEffect(() => {
    console.log(res.imageLink);
  }, [res]);

  const updateImage = () => fetchImage();

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
                      handleUpdate={updateImage}
                    />
                  </div>
                  <div className="col-2">
                    <Button
                      classes="btn-danger"
                      label="Dislike"
                      handleUpdate={updateImage}
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
};
