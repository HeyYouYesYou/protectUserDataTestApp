interface BackendErrorProps {
  message: string | null;
  name: string;
  status: string | null;
}

const BackendError = ({ error }: Readonly<{ error: BackendErrorProps }>) => {
  if (!error?.message) {
    return null;
  }

  return (
    <article className="text-destructive text-xl italic">
      {error.message}
    </article>
  );
};

export default BackendError;
