import { Component } from "react";
import { ProfileInformation } from "../ProfileInformation";
import { ClassForm } from "./ClassForm";
import { UserInformation } from "../types";

type ClassState = { user: UserInformation | null };

export class ClassApp extends Component<Record<string, never>, ClassState> {
  state: ClassState = {
    user: null,
  };

  handleFormSubmit = (user: UserInformation) => {
    this.setState({ user });
  };

  render() {
    const { user } = this.state;
    return (
      <>
        <h2>Class Component</h2>
        <ProfileInformation userData={user} />
        <ClassForm onSubmit={this.handleFormSubmit} />
      </>
    );
  }
}
