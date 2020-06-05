<%if (currentUser) {%>
    <li>
      <form class="" action="index.html" method="post">
        <input type="submit" value="Log Out">
      </form>
    </li>
<%}
  else {%>
    <li><a href="#">Sign Up</a></li>
    <li><a href="#">Log In</a></li>
<%}%>
