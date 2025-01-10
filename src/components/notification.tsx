import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Notifications = ({ title, message, icon, type }) => {
  return (
    <>
      <Alert variant={type} className="flex flex-row gap-2">
        <span className="material-icons">{icon}</span>
        <div>
          <AlertTitle>{title}</AlertTitle>
          <AlertDescription>{message}</AlertDescription>
        </div>
      </Alert>
    </>
  );
};

export default Notifications;
