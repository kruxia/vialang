# Via Samples
2020-04-06

```via

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

---

define a as 1
define greeting as quote Hello, Via! end quote

define hello-via as function begin
    print greeting
end function

hello-via

define print as function with x begin
    write x and new-line
    return x
end function

define counter as function with count as 0 begin
    comment
        Like everything, parameters are immutable —
        the local count shadows the count parameter.
    end comment

    return function begin
        define count as count plus 1
        return count
    end function
end function

define index as call counter

define fibonacci as function with n begin
    if n < 3
        return 1
    else
        define f as fibonacci with n minus 1
        define g as fibonacci with n minus 2
        return f plus g
    end if
end function

print index and describe fibonacci

define odds as function begin
    for i in sequence 1 to 10 begin
        if i modulus 2 equals 0
            yield i
        end if
    end for
end function

print index and describe odds


```
