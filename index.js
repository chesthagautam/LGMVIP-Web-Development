<script type="text/javascript">
            function myfunc(event){
                event.preventDefault();
        
                var Name = document.getElementById("Name").value;
                var EmailId = document.getElementById("EmailId").value;
                var Password = document.getElementById("Password").value;
                var Number = document.getElementById("Number").value;
                var Name1 = document.getElementById("Name1").value;

                localStorage.setItem('Is_Name', Name );
                localStorage.setItem('Is_EmailId', EmailId );
                localStorage.setItem('Is_Password', Password );
                localStorage.setItem('Is_Number', Number );
                localStorage.setItem('Is_Name1', Name1 );

                
                

                
            } 
        </script>
        <script>
                let popup = document.getElementById("popup");
                function openpopup(){
                    popup.classList.add("open-popup");
                }
                function closepopup(){
                    popup.classList.remove("open-popup");
                }
        </script>
