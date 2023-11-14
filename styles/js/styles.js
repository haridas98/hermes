import React from "react";
import "../css/style.module.css";
import "../lib/animate/animate.min.css";
import "../lib/owlcarousel/assets/owl.carousel.min.css";
import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css";
import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css";

function SsubmitForm() {
  document.getElementById("form").style.display = "none";
  document.getElementById("success-message").style.display = "block";
}

function MyComponent() {
  const handleSubmit = () => {
    document.getElementById("form").style.display = "none";
    document.getElementById("success-message").style.display = "block";
    SsubmitForm();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>{/* Your form elements */}</form>
    </div>
  );
}

export default MyComponent;
