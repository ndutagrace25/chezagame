const FAQ = () => {
  const questions = [
    {
      title: "ORDERING",
      items: [
        {
          sub_title: "How do I place my order?",
          question:
            "To place an order, call or text us on 0700250238 We will assist you.",
        },
        {
          sub_title: "Can I book in advance?",
          question:
            "Yes, you can book games in advance by calling us and specifying your desired rental dates",
        },
        {
          sub_title: "Is there a booking fee?",
          question:
            "No, we do not charge a booking fee. You only pay for the game rental and delivery.",
        },
      ],
    },
    {
      title: "DELIVERY ",
      items: [
        {
          sub_title: "Do you deliver to my location?",
          question:
            "We currently deliver to Kikuyu, Ngong Road, Waiyaki Way and Thika Road. Follow us to be notified when we come to your area.",
        },
        {
          sub_title: "Do you charge for delivery?",
          question:
            "Yes, we use Uber Package Moto to deliver. The delivery charges apply based on your location. For transparency, we will provide the delivery cost details when you place your order.",
        },
      ],
    },
    {
      title: "PAYMENT ",
      items: [
        {
          sub_title: "What payment methods are accepted?",
          question:
            "We accept mobile payments. Pay via our Pochi La Biashara: +254700250238",
        },
        {
          sub_title: "Can I pay cash?",
          question:
            "No, we do not accept cash payments. Please use our mobile payment methods.",
        },
        {
          sub_title: "Can I have the games longer than 3 days?",
          question:
            "Yes, you can extend your rental period. Additional charges apply - Ksh xxx. Contact us to arrange an extension.",
        },
      ],
    },
    {
      title: "SUPPORT ",
      items: [
        {
          sub_title: "What happens if I damage the games?",
          question: "Report to us within 24 hours.",
        },
      ],
    },
  ];
  return (
    <div
      className="modal fade"
      id="exampleModal"
      //@ts-ignore
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">FAQs</h5>
            <button
              type="button"
              className="btn-close bg-black text-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div>
              {questions.map((item: any, inx: number) => (
                <div key={inx}>
                  <h3 className="fw-bold my-2 ">{item.title}</h3>
                  <div>
                    {item.items.map((itm: any, index: number) => (
                      <div key={index} className="my-3">
                        <div className="fw-bold text-muted">
                          {itm.sub_title}
                        </div>{" "}
                        <div>{itm.question}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary text-black"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
