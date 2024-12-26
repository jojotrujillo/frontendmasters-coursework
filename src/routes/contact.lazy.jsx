import { createLazyFileRoute } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import postContact from "../api/postContact.jsx";
import { useFormStatus } from "react-dom";

export const Route = createLazyFileRoute("/contact")({
  component: ContactRoute,
});

function ContactRoute() {
  const mutation = useMutation({
    mutationFn: function (formData) {
      // Neat trick I didn't know about with uncontrolled forms. Let the Web API handle the state
      // and pull from it when form is submitted. Then React 19 allows form actions as well, so
      // we can change the onSubmit to action and pass the formData object in directly.
      // https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
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
        <form action={mutation.mutate}>
          <ContactInput name={"name"} type={"text"} placeholder={"Name"} />
          <ContactInput type={"email"} name={"email"} placeholder={"Email"} />
          <textarea placeholder={"Message"} name={"message"}></textarea>
          {/* type='submit' is implicit on buttons */}
          <button>Submit</button>
        </form>
      )}
    </div>
  );
}

function ContactInput(props) {
  const { pending } = useFormStatus();

  return (
    <input
      disabled={pending}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}
