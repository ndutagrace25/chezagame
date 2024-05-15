const RentModal = ({ id }: { id: string }) => {
  return (
    <div
      className="modal fade"
      id={id}
      //   @ts-ignore
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header d-flex justify-content-between">
            <h5 className="modal-title" id="exampleModalLabel">
              To rent a game, kindly contact us on:
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body d-flex justify-content-center flex-column align-items-center">
            <div>
              <span className="fw-bold">Phone: </span>+254708807403
            </div>
            <div><span className="fw-bold">Email:</span> chezahive@gmail.com</div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary yellow-btn"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentModal;
