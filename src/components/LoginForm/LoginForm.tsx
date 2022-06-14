import React, { useState } from "react";

interface FormProps {
    method: string;
}

const LoginForm = (props: FormProps) => {
    return <div>{props.method}</div>;
};

export default LoginForm;
