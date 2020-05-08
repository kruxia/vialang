# Via Samples
2020-04-06

```via

define a as 5
define greeting as quote Hello, Via! end quote

define hello-via as function with greeting begin
    return greeting
end function

return hello-via greeting

define fibonacci as function with n begin
    if n less than 3 begin
        return 1
    end if
    define f as fibonacci with n minus 1
    define g as fibonacci with n minus 2
    return f plus g
end function

define odds as function begin
    comment
        The yield keyword is not yet available.
    end comment
    while true begin
        if i modulus 2 equal to 0 begin
            yield i
        end if
    end while
end function

define counter as function with count as 0 begin
    comment
        This is a closure.
        Parameters are immutable —
        the local variable shadows the parameter.
    end comment

    return function begin
        define count as count plus 1
        return count
    end function
end function

---

show patients
    WITH format as list
    and sort-by as name
    and having either general-practitioner as me
        or resources referencing me

show patient with id as 886286

show appointments
    WITH format as week
    HAVING reference TO THIS patient
    AND HAVING start as greater than or equal to March 3

show appointment IN THESE appointments
    HAVING start as March 6 AT 12 pm

ON THIS appointment
    append comment
    QUOTE
        Discuss the patient’s surgery and lab results with the patient
        and agree to a care plan.
    END QUOTE
    save comment

```
