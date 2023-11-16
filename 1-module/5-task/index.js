function truncate(str, maxlength) {
  if (str.length > maxlength) {
    str = str.slice(0, maxlength-1) + "…";
  }
  console.log(str);
  return str;
}

truncate('fsdfasdfadcvnncvnbnfs', 7);
