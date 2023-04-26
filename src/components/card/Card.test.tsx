import { beforeEach, describe, expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import { Card } from "./Card"

describe("Card", () => {
  beforeEach(() => {
    render(
      <Card userId={0} title={"Título de la tarjeta"} body={"Cuerpo de la tarjeta"} />
    )
  })

  test("La tarjeta debería pintarse", () => {
    expect(screen.getAllByText(/tarjeta/i)).toBeDefined
  })
})