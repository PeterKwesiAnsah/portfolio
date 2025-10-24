---
title: "Go Interfaces: Part One"
description: Understanding Go Interfaces.
date: October 24, 2025
draft: false
---

Writing a **[Tree-walk Interpreter](https://github.com/PeterKwesiAnsah/bangScript)** in Go, I found myself using interfaces a lot, so I decided to write a two-part series blog. **Part one** teaches what Go interfaces are and their uses.
**Part two** shows how interfaces work under the hood.

## What is an interface?

Interface, simply put, represents **_behavior_**. Go allows you to associate behavior to a type, and based on what a type can do, determines whether it can be used for a particular purpose. This is contrary to languages like **C**, where types are explicitly declared. A type can implement many interfaces or have many behaviors.

```go
// Shape defines a behavior
type Shape interface {
    Area() float64
}

func measure(s Shape) {
    fmt.Println(s.Area())
}
```

The function `measure` can only be called with a value of any type that has the `Area` method with the right signature. The Go compiler also statically checks if the type of the passed value has the behaviors declared by the `Shape` interface.

Implementing an interface means creating **[methods](https://go.dev/tour/methods/1)** on a type with the right signature as declared by the interface.
With that said, you might write a `String` method on a type and have no idea that Go has implicitly associated it with the **[Stringer](https://go.dev/tour/methods/17)** interface.

Below, `Circle` and `Rectangle` implement the `Shape` interface.

```go
type Circle struct {
    Radius float64
}

type Rectangle struct {
    Width, Height float64
}

func (c Circle) Area() float64 {
    return math.Pi * c.Radius * c.Radius
}

func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}
```

## Type Assertions

Go also allows you to check what type implements an interface by using the `switch` statement at run time. This can be used for debugging or applying type-specific logic.

```go
func PrintArea(s Shape) {
    switch v := s.(type) {
        case Circle:
            fmt.Printf("I am Circle, and this is my area %f", v.Area())
        case Rectangle:
            fmt.Printf("I am Rectangle, and this is my area %f", v.Area())
    }
}
```

You can retrieve the underlying value of an interface by asserting the value type. If the interface doesn't contain that type, it panics.

```go
var s Shape = Circle{Radius: 5}
v := s.(Circle)
r := s.(Rectangle) // panics
```

If you are not sure of the underlying type of the interface value, you can test whether an interface value holds a specific type.

```go
var s Shape = Circle{Radius: 5}
v, ok := s.(Circle)
if ok {
    fmt.Println("I am Circle")
} else {
    fmt.Println("????")
}
```

## Key Giveaways

Most pitfalls I encountered when working with interfaces had to do with method design. Since Go implicitly implements interfaces (no explicit declaration required), be mindful of your method signatures and **[receiver types](https://go.dev/ref/spec#Method_declarations)** - they determine whether a type satisfies an interface.

## What's Next

Part Two is coming next week, where we'll explore how interfaces work under the hood.
