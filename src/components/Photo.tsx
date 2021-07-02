export const Photo = ({ imgLink }: { imgLink: string }) => {
  return (
    <img
      src={imgLink}
      className="mx-auto d-block card-img-top img-width w-25"
      alt="..."
    />
  );
};
