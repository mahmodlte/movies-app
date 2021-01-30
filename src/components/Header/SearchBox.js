import { Form, FormControl, Button } from "react-bootstrap";
const SearchBox = () => {
  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder="Search for you favorite movie"
        className="mr-sm-2"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
};
export default SearchBox;
