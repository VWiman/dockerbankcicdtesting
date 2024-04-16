"use client";
import { useAuth } from "@/context/AuthContext";
import { useRef, useState, useEffect } from "react";
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Login() {
	const userNameInput = useRef(null);

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { login, setError, setPage, setAlertMessage, user } = useAuth();

	useEffect(() => {
		setPage("login");
	}, []);

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			await login(username, password);
		} catch (error) {
			setError(true);
			setAlertMessage("Incorrect username or password");
			setUsername("");
			setPassword("");
			userNameInput.current.focus();

			setTimeout(() => {
				setError(false);
			}, "5000");
		}
	};

	return (
		<>
			{" "}
			{!user ? (
				<Card className="mx-auto px-16 md:px-0 min-w-full max-w-full sm:min-w-fit">
					<CardHeader>
						<CardTitle className="text-2xl">Log in</CardTitle>
						<CardDescription>Enter your username and password below to login to your account</CardDescription>
					</CardHeader>
					<form onSubmit={(e) => handleLogin(e)}>
						<CardContent>
							<div className="grid sm:grid-flow-col-dense gap-4">
								<div className="grid gap-2">
									<Label htmlFor="username">Username</Label>
									<Input
										ref={userNameInput}
										onChange={(e) => setUsername(e.target.value)}
										value={username}
										id="usernameInputId"
										type="text"
										placeholder="username"
										autoComplete="username"
										required
									/>
								</div>
								<div className="grid gap-2">
									<div className="flex items-center">
										<Label htmlFor="password">Password</Label>
									</div>
									<Input
										onChange={(e) => setPassword(e.target.value)}
										value={password}
										id="passwordInputId"
										type="password"
										placeholder="password"
										autoComplete="current-password"
										required
									/>
								</div>
								<Button className="w-full sm:self-end sm:w-fit mx-auto" type="submit" disabled={!username || !password}>
									Submit
								</Button>
							</div>
							<div className="flex flex-col min-h-12 text-center sm:justify-center text-sm mt-2">
								<div className="flex flex-col justify-center sm:gap-2 sm:flex-row">
									<p>Don't have an account?</p>
									<Link className="underline" href="/create">
										Sign up
									</Link>
								</div>
							</div>
						</CardContent>
					</form>
				</Card>
			) : (
				<Card className="flex flex-col mx-auto px-16 md:px-0 min-w-full max-w-full sm:min-w-fit sm:min-h-full">
					<CardHeader>
						<CardTitle className="text-2xl">
							<span className="text-2xl font-semibold">You are already logged in.</span>
						</CardTitle>{" "}
						<CardDescription className="flex flex-col min-h-12 text-center sm:justify-center text-sm mt-2 text-foreground underline">
							<Link href={"/account" }>Back to account page</Link>
						</CardDescription>
					</CardHeader>
				</Card>
			)}
		</>
	);
}
