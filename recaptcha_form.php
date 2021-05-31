<?php
  
  if(isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response']))
  {
        $secret = '6LcRgKYaAAAAAHgXkgnfn8pgydZFj0bJH8lI6MEU';
        $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret.'&response='.$_POST['g-recaptcha-response']);
        $responseData = json_decode($verifyResponse);
        if($responseData->success)
        {
            echo "Success!";
        }
		else
		{
			return;
		}
   }
?>