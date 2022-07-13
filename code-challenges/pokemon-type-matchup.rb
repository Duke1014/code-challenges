def calculate_damage(type_one, type_two, attack, defense)
    effective = 1
    if type_one == type_two
        effective = 0.5
    elsif type_one == "fire"
        if type_two == "water"
            effective = 0.5
        elsif type_two == "grass"
            effective = 2
        end
        
    elsif type_one == "water"
        if type_two == "fire"
            effective = 2
        elsif type_two == "grass" || type_two == "electric"
            effective = 0.5
        end

    elsif type_one == "grass"
        if type_two == "fire"
            effective = 0.5
        elsif type_two == "water"
            effective = 2
        end

    # elsif type_one == "electric"
    #   if type_two == "water"
    #     effective = 2
    #   end

    end
    return 50 * (attack / defense) * effective
end

puts calculate_damage('fire', 'water', 100, 100) == 25
puts calculate_damage('grass', 'water', 100, 100) == 100
puts calculate_damage('electric', 'fire', 100, 100) == 50
puts calculate_damage('grass', 'electric', 57, 19) == 150
puts calculate_damage('grass', 'water', 40, 40) == 100
puts calculate_damage('grass', 'fire', 35, 5) == 175
puts calculate_damage('fire', 'electric', 10, 2) == 250