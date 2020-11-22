package com.ubb.proiectcolectiv;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("skills")
public class SkillController {
    @Autowired
    private SkillRepository skillRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private UserSkillsEntryRepository userSkillsEntryRepository;

    @PostMapping("add_skill")
    public String createSkill(@RequestParam String categoryName, @RequestParam String name, @RequestParam String knowledgeLvl, @RequestParam String experience, @RequestParam int userId){
        System.out.println(name);
        System.out.println(categoryName);
        String category = categoryRepository.findByName(categoryName);
        int categoryId = 0;
        try {
            categoryId = Integer.parseInt(category);
        }catch (Exception e){
            categoryId = 1;
        }
        String skillIdStr = skillRepository.findByName(name);
        if(skillIdStr == null){
            Skill skill = new Skill(name, categoryId);
            skillRepository.save(skill);
            skillIdStr = skillRepository.findByName(name);
        }
        int skillId = Integer.parseInt(skillIdStr);
        UserSkillsEntry userSkillsEntry = new UserSkillsEntry(userId, skillId, knowledgeLvl, experience);
        userSkillsEntryRepository.save(userSkillsEntry);

    return "skill added";
    }

}
