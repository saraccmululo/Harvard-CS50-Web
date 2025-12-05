document.addEventListener("DOMContentLoaded", ()=>{
  document.querySelectorAll(".btn-like").forEach(button=>{
    button.addEventListener("click", async ()=>{
      const postId = button.dataset.id;

      try{
        const response = await fetch(`/toggle_like/${postId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" }
        });

        if(!response.ok) {
        throw new Error("Network response was not ok");
        }
        const data = await response.json();

        // Find the heart and like-count span in the button
        const heart= button.querySelector(".heart-icon");
        const likeCount= button.querySelector(".like-count");

        if(heart) {
          heart.textContent=data.liked? "❤️":"🤍";
        }
        if (likeCount){
          likeCount.textContent=data.likes_count
        }
      
      } catch (error) {
        console.error("Error liking/unliking post:", error);
      }
    });
  });
});