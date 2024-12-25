import { createLazyFileRoute } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import postContact from "../api/postContact.jsx";

export const Route = createLazyFileRoute("/contact")({
  component: ContactRoute,
});

function ContactRoute() {
  const mutation = useMutation({
    mutationFn: function (e) {
      e.preventDefault();
      // Neat trick I didn't know about with uncontrolled forms. Let the Web API handle the state
      // and pull from it when form is submitted.
      // https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
      const formData = new FormData(e.target);

      return postContact(
        formData.get("name"),
        formData.get("email"),
        formData.get("message"),
      );
    },
  });

  return (
    <div className={"contact"}>
      <h2>Contact</h2>
      {mutation.isSuccess ? (
        <h3>Submitted!</h3>
      ) : (
        <form onSubmit={mutation.mutate}>
          <input name={"name"} placeholder={"Name"} />
          <input type={"email"} name={"email"} placeholder={"Email"} />
          <textarea placeholder={"Message"} name={"message"}></textarea>
          {/* type='submit' is implicit on buttons */}
          <button>Submit</button>
        </form>
      )}
    </div>
  );
}
