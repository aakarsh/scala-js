/* ------------------
 * java.lang.String
 * ------------------ */

/* java.lang.String does not have an actual implementation as a Scala.js
 * class, because strings are encoded as JS strings.
 * Hence, we only define data and instance tests.
 */

ScalaJS.is.java\ufe33lang\ufe33String = (function(obj) {
  return typeof(obj) === "string"
});

ScalaJS.as.java\ufe33lang\ufe33String = (function(obj) {
  if (typeof(obj) === "string" || obj === null) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.String")
  }
});

ScalaJS.isArrayOf.java\ufe33lang\ufe33String = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java\ufe33lang\ufe33String)))
});

ScalaJS.asArrayOf.java\ufe33lang\ufe33String = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java\ufe33lang\ufe33String(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.String;", depth)
  }
});

ScalaJS.data.java\ufe33lang\ufe33String = {
  constr: undefined,   // java.lang.String does not really
  jsconstr: undefined, //   have a constructor
  //parentData: ScalaJS.data.java\ufe33lang\ufe33Object,
  parentData: undefined,
  ancestors: {
    java\ufe33lang\ufe33String: true,
    java\ufe33io\ufe33Serializable: true,
    java\ufe33lang\ufe33CharSequence: true,
    java\ufe33lang\ufe33Comparable: true,
    java\ufe33lang\ufe33Object: true
  },
  isPrimitive: false,
  isInterface: false,
  isArrayClass: false,
  componentData: null,
  zero: null,
  arrayEncodedName: "Ljava.lang.String;",
  displayName: "java.lang.String",
  _classOf: undefined,
  getClassOf: ScalaJS.classOfGetter,
  _arrayOf: undefined,
  getArrayOf: ScalaJS.arrayOfGetter,
  isInstance: ScalaJS.is.java\ufe33lang\ufe33String,
  isArrayOf: ScalaJS.isArrayOf.java\ufe33lang\ufe33String
};
