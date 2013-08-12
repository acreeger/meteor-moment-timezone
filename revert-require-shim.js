// This file undoes all the trickery that we needed to get timezone working.
(function(undefined) {

  if (this.__AC_OLD_REQUIRE) {
    this.require = this.__AC_OLD_REQUIRE;
    delete this.__AC_OLD_REQUIRE;
  }

  if (this.__AC_OLD_MODULE) {
    this.module = this.__AC_OLD_MODULE;
    delete this.__AC_OLD_MODULE;
  }
}).call(this);
