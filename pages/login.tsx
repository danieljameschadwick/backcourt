import Head from "next/head";
import { Formik } from "formik";
import * as Yup from "yup";
import { LoginDTO } from "@src/util/dto/LoginDTO";
import { useStateValue } from "@src/state/StateProvider";

const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    password: Yup.string()
        .required("Required"),
});

const Login = () => {
    const [ { user }, dispatch ] = useStateValue();

    const handlePost = async (dto: LoginDTO) => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dto),
        };

        const response = await fetch(`${process.env.API}/auth/login`, requestOptions);

        if (response.status === 401) {
            return;
        }

        const data = await response.json();
        console.log(data);

        dispatch({ type: "setUsername", username: data.username });
        dispatch({ type: "setAccessToken", accessToken: data.access_token });
    };

    return (
        <div>
            <Head>
                <title>Backcourt | Login</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className={"container"}>
                    <h1>Login</h1>

                    {user?.username}

                    <Formik
                        initialValues={{
                            username: "",
                            password: "",
                        }}
                        validationSchema={LoginSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            handlePost(values);

                            setSubmitting(false);
                        }}
                    >
                        {({
                              values,
                              handleChange,
                              handleSubmit,
                              isSubmitting,
                              errors,
                              touched,
                          }) => (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label>Username:</label>

                                    <input
                                        type={"text"}
                                        name={"username"}
                                        onChange={handleChange}
                                        value={values.username}
                                    />

                                    {errors.username && touched.username ? (
                                        <div>{errors.username}</div>
                                    ) : null}
                                </div>


                                <div>
                                    <label>Password:</label>

                                    <input
                                        type={"text"}
                                        name={"password"}
                                        onChange={handleChange}
                                        value={values.password}
                                    />

                                    {errors.password && touched.password ? (
                                        <div>{errors.password}</div>
                                    ) : null}
                                </div>

                                <button type="submit" disabled={isSubmitting}>
                                    Login
                                </button>
                            </form>
                        )}
                    </Formik>
                </div>
            </main>
        </div>
    );
};

export default Login;