var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Teacher = /** @class */ (function () {
    function Teacher(initialAttributes) {
        // Initialize firstName and lastName only once during construction
        this.attributes = __assign({}, initialAttributes);
        // Ensure other required properties are defined
        this.attributes.fullTimeEmployee = true;
    }
    Teacher.prototype.getAttributes = function () {
        return __assign({}, this.attributes);
    };
    return Teacher;
}());
var printTeacher = function (firstName, lastName) {
    return " ".concat(firstName.charAt(0).toUpperCase(), ". ").concat(lastName);
};
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
//# sourceMappingURL=main.js.map