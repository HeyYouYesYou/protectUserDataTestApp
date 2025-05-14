interface layoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

const ListLayout = ({ children, modal }: Readonly<layoutProps>) => {
  return (
    <div>
      {modal}
      {children}
    </div>
  );
};

export default ListLayout;
