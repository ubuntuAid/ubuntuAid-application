import Footer from "../components/footer/Footer"
import NavBar from "../components/navBar/NavBar"
import ReviewForm from "../components/reviews/ReviewForm"
import { AuthProvider } from "../contexts/AuthContext"; // Ensure correct import path

function Reviews() {
  return (
    <AuthProvider>
      <NavBar />
      <ReviewForm />
      <Footer />
    </AuthProvider>
  )
}

export default Reviews