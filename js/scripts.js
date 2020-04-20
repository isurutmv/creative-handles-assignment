      function clearFields() {
          document.title = document.getElementById("txt_name").value;

          //disable the submit (Colorize) button after submission
          document.getElementById("btn_insert").setAttribute("disabled", null);
          //make the input empty after submission
          document.getElementById("txt_name").value = "";
          //refocus to the input after submission
          document.getElementById("txt_name").focus();
          window.scrollTo(0, document.body.scrollHeight);

          //add margins to bottom & top of the content
          document.getElementById("section").classList.add("mt-5");
          document.getElementById("democontainer").classList.add("mb-5");
      }

      // disable or enable button

      document
          .getElementById("txt_name")
          .addEventListener("keyup", function () {
              var nameInput = document.getElementById("txt_name").value;
              //make the submit (Colorize) button disabled if the input is empty. Other wise make it enabled.
              if (nameInput != "") {
                  document.getElementById("btn_insert").removeAttribute("disabled");
              } else {
                  document
                      .getElementById("btn_insert")
                      .setAttribute("disabled", null);
              }
          });