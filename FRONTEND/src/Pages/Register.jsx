import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import logo from "../../src/assets/logo.jpg";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { Loader } from "lucide-react";

// ✅ Validation Schema (aligned with backend)
const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." })
    .max(20, { message: "Password cannot exceed 20 characters." }),
  whatsapp: z
    .string()
    .regex(/^(\+?\d{11,15})$/, { message: "Enter a valid WhatsApp number (e.g. +880123456789)." }),
  address: z.string().min(3, { message: "Please enter your current address." }),
  institution: z.string().min(2, { message: "Institution name is required." }),
  gameUID: z
    .string()
    .min(3, { message: "Game UID must be at least 3 characters." })
    .max(11, { message: "In-game UID cannot exceed 11 characters." }), 
});

const Register = () => {
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterMutation();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      whatsapp: "",
      address: "",
      institution: "",
      gameUID: "",
    },
  });

  const onSubmit = async (data) => {
    const toastId = toast.loading("Creating account...");
    try {
      await registerUser(data).unwrap();
      form.reset();
      toast.success("User registered successfully!", { id: toastId });
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);

      if (error?.data?.errors) {
        const backendMessage = error.data.errors
          .map((e) => e.message)
          .join(", ");
        toast.error(backendMessage, { id: toastId });
      } else {
        toast.error("Registration failed. Please check your inputs.", { id: toastId });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm border">
          {/* Logo Header */}
          <div className="flex items-center justify-center gap-2 border border-black bg-gray-200 p-2 rounded-xl mb-8">
            <img src={logo} alt="logo" className="w-10 h-10 md:w-16 md:h-16" />
            <h2 className="flex flex-col justify-center uppercase">
              <span className="font-bold text-xl md:text-3xl">Go On</span>
              <span className="-mt-1 font-normal text-xs md:text-sm tracking-widest">
                Upgrade your Gaming Experience
              </span>
            </h2>
          </div>

          <div className="text-2xl font-bold text-center mb-6">Create Account</div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Full Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Enter your password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* WhatsApp */}
              <FormField
                control={form.control}
                name="whatsapp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>WhatsApp Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+880123456789" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Address */}
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your current address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Institution */}
              <FormField
                control={form.control}
                name="institution"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Institution Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your institution name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Game UID */}
              <FormField
                control={form.control}
                name="gameUID"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>In-Game UID</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your Game UID (max 11 chars)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit */}
              <Button
                type="submit"
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <Loader className="animate-spin" /> Creating...
                  </span>
                ) : (
                  "Register"
                )}
              </Button>
            </form>
          </Form>

          {/* Login Link */}
          <div className="mt-6 text-center text-sm">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
